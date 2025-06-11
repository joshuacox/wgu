# wgu
WireGuard Up assistant

This is a wrapper for wg-quick that gives me a random wg.conf from a given directory (`/etc/wireguard` by default).  If you are using [mullvad](https://mullvad.net/) then you can download a zip of all the confs for their over 500 endpoints.

## Install

 ```sh
./configure
sudo make install
```

## Usage

to get a random worldwide vpn

```
wgu
```

If using mullvad, to get a US vpn

```
wgu us
```

to get a swedish vpn

```
wgu se
```

This works with the regex `".*/$1.*\.conf"` in this line:

```
  wgquick=$(sudo find ${WG_DIR} -regextype sed -regex ".*/$1.*\.conf"|shuf|tail -n1)
```

## Config

You can change the directory wgu uses to source the wg.conf files by exporting `WG_DIR`:

```
export WG_DIR=/etc/wireguard
```

At the top of `wgu` you will see this structure:

```
if [[ -f ~/.config/wgu/config ]]; then
  source ~/.config/wgu/config
elif [[ -f ~/.wgu_config ]]; then
  source ~/.wgu_config
fi
: "${WG_DIR:=/etc/wireguard}"
```

so if you place a line like:

```
WG_DIR=/etc/wireguard
```

in either of these two files:

```
~/.wgu_config
~/.config/wgu/config
```

You can override where wgu will source the config files from.

Notice if you use a line like this:

```
: "${WG_DIR:=/etc/wireguard}"
```

Then you can override the variable at run time like so:

```
WG_DIR=/tmp/mydir wgu
```
