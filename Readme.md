# rn-splash-util-tool

Easily generate splash/launch images for both iOS and Android with a single command. This tool creates all the required image sizes and automatically generates the Android launch_screen.xml file. Save time and simplify your splash screen setup for **React Native apps** with this quick and easy utility.

## Features

- Generate splash images for both iOS and Android
- Automatically create all required image sizes
- Generate Android `launch_screen.xml` file
- Simple one-command process

## Installation

Install as global dependency

```bash
npm install -g rn-splash-util-tool
```

## Usage

1. Navigate to your React Native project folder in the terminal.
2. Run the following command:

```bash
splash-gen
```

3. When prompted, enter the path to your splash image:

```bash
? Please enter a valid splash image path here:-  /Users/admin/Downloads/betterthanbefore.jpeg 
```


**Note:** The recommended image size for optimal fitting across all devices is **810 × 1440 pixels**.

## Output

The tool will generate all splash images in the appropriate locations within your project structure:

<p>
  <img height="150" src="https://github.com/nerdifydev/rn-splash-util-tool/blob/main/images/output.png"></img>
</p> 

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

ISC License

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
