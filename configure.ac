# Define the version of the library
AM_INIT_AUTOMAKE

# Set the package name
PACKAGE="my_script_package"
PACKAGE_VERSION="1.0"

# Define the script names to be installed
SCRIPTS=$(find . -type f -name "wgu" -o -name "wgd")
if [ "$SCRIPTS" != "" ]; then
  SOURCES="$SCRIPTS"
else
  echo "No scripts found in the directory."
  exit 1
fi

# Default installation directory to /usr/local/bin
DEFAULT_INSTALL_DIR="/usr/local/bin"

# Create a Makefile and install rules
AC_CONFIG_COMMANDS([
  makefiles
  $(SOURCES)/Install.wgu
  $(SOURCES)/Install.wgd
  install Scripts/$(PACKAGE).sh $(DEFAULT_INSTALL_DIR)/bin/
], [ 
  rm -f $(SOURCES)/$(PACKAGE)_setup.sh
])

# Define the setup script that will be installed
SOURCES=$(find . -type f -name "wgu" -o -name "wgd")
if [ "$SOURCES" != "" ]; then
  echo "#!/bin/bash\n"
  echo "set -e\n"
  echo "source $(PACKAGE)_setup.sh\$\$\$"
fi

# Define the package directory structure
mkdir -p $(PKG_CONFIGdir)/$(PACKAGE)
