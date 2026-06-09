# macOS Traffic Lights

A set of macOS window control buttons ("traffic lights") in SVG format —
`close`, `minimize` and `maximize`, each with `default`, `hover` and `active`
states, plus an `unfocused` icon.

![npm](https://img.shields.io/npm/v/macos-traffic-lights)
![license](https://img.shields.io/npm/l/macos-traffic-lights)

## 🔧 Installation

```sh
npm i macos-traffic-lights
```

## ✏️ Usage

Each export is an `import` of a `.svg` file, so your project needs a bundler
with SVG support (Vite, webpack with `asset/resource`, Parcel, etc.). With the
common setups the imported value is the SVG's URL string.

Named exports:

```js
import { closeHover, unfocused } from 'macos-traffic-lights';

img.src = closeHover;
```

Or the grouped object (`default` / named export `trafficLights`):

```js
import trafficLights from 'macos-traffic-lights';

img.src = trafficLights.close.hover;
img.src = trafficLights.unfocused;
```

### Icons

<table>
    <thead>
        <th>Button</th>
        <th>Default</th>
        <th>Hover</th>
        <th>Active</th>
    </thead>
    <tbody>
        <tr>
            <th>Unfocused</th>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/unfocused.svg" alt="unfocused" width="24"></td>
            <td align="center">—</td>
            <td align="center">—</td>
        </tr>
        <tr>
            <th>Close</th>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/close/default.svg" alt="close" width="24"></td>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/close/hover.svg" alt="close hover" width="24"></td>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/close/active.svg" alt="close active" width="24"></td>
        </tr>
        <tr>
            <th>Minimize</th>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/minimize/default.svg" alt="minimize" width="24"></td>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/minimize/hover.svg" alt="minimize hover" width="24"></td>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/minimize/active.svg" alt="minimize active" width="24"></td>
        </tr>
        <tr>
            <th>Maximize</th>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/maximize/default.svg" alt="maximize" width="24"></td>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/maximize/hover.svg" alt="maximize hover" width="24"></td>
            <td align="center"><img src="https://raw.githubusercontent.com/aw3r1se/macOS-traffic-lights/master/svg/maximize/active.svg" alt="maximize active" width="24"></td>
        </tr>
    </tbody>
</table>

| Button | Default | Hover | Active |
| --- | --- | --- | --- |
| Unfocused | `unfocused` | — | — |
| Close | `closeDefault` | `closeHover` | `closeActive` |
| Minimize | `minimizeDefault` | `minimizeHover` | `minimizeActive` |
| Maximize | `maximizeDefault` | `maximizeHover` | `maximizeActive` |

## 🤝 Contributing

Contributions are welcome:

* Fork → branch → commit with a `feat:` / `fix:` prefix
* Test locally
* Open a pull request
