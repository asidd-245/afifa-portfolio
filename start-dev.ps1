# PowerShell script to start the development server
# This script checks for Node.js and pnpm, then starts the dev server

Write-Host "Checking for Node.js..." -ForegroundColor Cyan

# Check for Node.js
$nodePath = $null
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodePath = "node"
    Write-Host "✓ Node.js found in PATH" -ForegroundColor Green
} elseif (Test-Path "C:\Program Files\nodejs\node.exe") {
    $nodePath = "C:\Program Files\nodejs\node.exe"
    Write-Host "✓ Node.js found in Program Files" -ForegroundColor Green
} elseif (Test-Path "$env:LOCALAPPDATA\Programs\nodejs\node.exe") {
    $nodePath = "$env:LOCALAPPDATA\Programs\nodejs\node.exe"
    Write-Host "✓ Node.js found in Local AppData" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js not found!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check for pnpm
Write-Host "`nChecking for pnpm..." -ForegroundColor Cyan
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    Write-Host "✓ pnpm found" -ForegroundColor Green
    $packageManager = "pnpm"
} elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    Write-Host "✓ npm found (will use npm instead)" -ForegroundColor Yellow
    $packageManager = "npm"
} else {
    Write-Host "✗ Neither pnpm nor npm found!" -ForegroundColor Red
    Write-Host "Installing pnpm..." -ForegroundColor Yellow
    & $nodePath -e "require('child_process').execSync('npm install -g pnpm', {stdio: 'inherit'})"
    $packageManager = "pnpm"
}

# Check if node_modules exists
Write-Host "`nChecking dependencies..." -ForegroundColor Cyan
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    if ($packageManager -eq "pnpm") {
        pnpm install
    } else {
        npm install
    }
} else {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
}

# Start dev server
Write-Host "`nStarting development server..." -ForegroundColor Cyan
Write-Host "The site will be available at http://localhost:3000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server`n" -ForegroundColor Yellow

if ($packageManager -eq "pnpm") {
    pnpm dev
} else {
    npm run dev
}



