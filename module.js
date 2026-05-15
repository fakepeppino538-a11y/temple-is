var Module = {
    arguments: [
        "-M", "pc",

        "-m", "512M",

        "-cdrom", "templeos.iso",

        "-boot", "d",

        "-vga", "std"
    ],

    canvas: (() => {
        const canvas = document.createElement("canvas");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        document.body.appendChild(canvas);

        return canvas;
    })()
};