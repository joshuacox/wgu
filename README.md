# wgu - WireGuard Configuration Assistant

A simple command-line tool to manage WireGuard connections by automatically selecting and applying random configuration files from a specified directory. Ideal for users who want to rotate between multiple WireGuard endpoints (e.g., Mullvad users with 500+ server locations).

---

## 🚀 Features

- **Random Configuration Selection**: Choose a random WireGuard config file from a directory.
- **Country-Specific Filtering**: Select configs matching a specific country code (e.g., `us`, `se`).
- **Flexible Configuration**: Customize the config directory via environment variables or config files.
- **Zero Dependency Installation**: Built as a Bash script with no external dependencies beyond WireGuard.

---

## 📦 Installation

### oneliner

```
curl -sL https://raw.githubusercontent.com/joshuacox/wgu/refs/heads/master/bootstrap.sh | bash
```

1. **Ensure WireGuard is installed**  
   This tool requires `wg-quick` (part of the WireGuard package).  
   On Debian/Ubuntu:  
   ```bash
   sudo apt install wireguard
   ```

2. **Build and Install**  
   ```bash
   ./configure
   sudo make install
   ```
   This installs the `wgu` script to your system's binary path.

---

## ▶️ Usage

```bash
wgu [COUNTRY_CODE]
```

### Examples

- **Random worldwide config**  
  ```bash
  wgu
  ```

- **Random US config**  
  ```bash
  wgu us
  ```

- **Random Swedish config**  
  ```bash
  wgu se
  ```

### How It Works

- **No arguments**: Randomly selects any `.conf` file in `${WG_DIR}`.
- **Country code**: Uses a regex pattern `.*/$1.*\.conf` to match filenames (e.g., `us-ams1.conf` for `us`).

---

## ⚙️ Configuration

### Set a Custom Config Directory

By default, `wgu` uses `/etc/wireguard`. To override this:

#### Option 1: Environment Variable
```bash
export WG_DIR=/path/to/your/configs
wgu
```

#### Option 2: Config Files
Create one of these files and add:
```bash
WG_DIR=/path/to/your/configs
```

- `~/.config/wgu/config` (preferred)
- `~/.wgu_config` (fallback)

# Other options
```bash
VERBOSITY=0 # How verbose to be
WG_D_B4_U=0 # whether or not to to a wgd before wgu
```

---

## ⚠️ Notes

- **Permissions**: Requires `sudo` to apply WireGuard configurations.
- **Error Handling**:  
  - If no config matches, an error is shown.  
  - If `wg-quick` is missing, the script exits with an error message.

---

## 📄 License

This project is licensed under the terms of the [GNU General Public License v3.0](LICENSE).
