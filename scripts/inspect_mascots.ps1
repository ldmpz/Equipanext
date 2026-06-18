Add-Type -AssemblyName System.Drawing

$sourcePath = "C:\Users\danie\Desktop\Equipanext\public\assets\images\marca\Mascotas.png"
$destFolder = "C:\Users\danie\Desktop\Equipanext\public\assets\images\marca"

$src = [System.Drawing.Bitmap]::FromFile($sourcePath)

# Crop Left Half (Hero Mascot)
$rectLeft = New-Object System.Drawing.Rectangle(0, 0, 768, 1024)
$leftHalf = $src.Clone($rectLeft, $src.PixelFormat)
$leftHalf.Save((Join-Path $destFolder "mascota_hero.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$leftHalf.Dispose()

# Crop Right Half (Widget Mascot)
$rectRight = New-Object System.Drawing.Rectangle(768, 0, 768, 1024)
$rightHalf = $src.Clone($rectRight, $src.PixelFormat)
$rightHalf.Save((Join-Path $destFolder "mascota_widget.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$rightHalf.Dispose()

$src.Dispose()
Write-Output "Successfully split Mascot.png into mascota_hero.png and mascota_widget.png"
