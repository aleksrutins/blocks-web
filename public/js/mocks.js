/*
Copyright 2022 Aleks Rutins
Extracted from RC-generated stuff
*/
function createWebcamDeviceNameDropdown() {
    return createFieldDropdown([
        ["Webcam 1", "mock_webcam"]
    ])
}

var URI_HARDWARE = "/hardware" // Eww! `var`! But `const` is block-scoped, so I don't really have a choice.