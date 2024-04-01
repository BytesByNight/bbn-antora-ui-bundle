# BytesByNight Docs UI

Sources of Antora UI Bundle for the BytesByNight internal Docs site with light and dark theme.

This bundle is a fork of [the UI bundle](https://gitlab.com/fedora/docs/docs-website/ui-bundle.git) used for the [Fedora Project](https://docs.fedoraproject.org/en-US/docs/) with the Fedora and Redhat branding removed along with some other tweaks.

## How to use it with Antora

Add the following configuration in your Antora playbook:

```yaml
ui:
  bundle:
    url: https://<website url>/bbn-antora-ui-bundle/latest.zip
    snapshot: true
  default_layout: with_menu
```

Adjust the path above as appropriate for your hosted bundle. Alternatively you can build using a local bundle using the following:

```yaml
ui:
  bundle:
    url: ./<relative path to bundle>/latest.zip
    snapshot: true
  default_layout: with_menu
```

In either case, the zipped bundle must exist.

> [!TIP]
> omitting the `default_layout: with_menu` option will result in a broken site.

## How to Build

For details see the complete documentation for the [Antora Default UI](https://docs.antora.org/antora-ui-default/) but in short the following steps are required:

Run

```shell
npm install
```
initially to set up the node dependencies. This was only tested with node version 21.7.1.

Thereafter use

```shell
npx gulp preview
```
to build and do a live preview (with a built-in, simple, change-watching webserver) which is helpful during development.

The preview can be built one-time (i.e. without change watching) using

```shell
npx gulp preview:build
```

To prepare the bundle for distribution use

```shell
npx gulp bundle:pack
```
and the produced bundle will be available at `build/ui-bundle.zip`.

## Licence

Most source code for the project is licensed under the Mozilla License 2.0 (MPL-2.0). A copy can be found in the `./LICENCE` file.

The clipboard icon comes from the Adwaita icon theme, courtesy of the GNOME Project https://gnome.org/. License: Creative Commons Attribution Share-Alike 3.0 (CC-BY-SA-3.0). A copy can be found in `./LICENCES/CC-BY-SA-3.0.txt`.

> [!NOTE]
>
> Main logo and it's white variant are not covered by the above licences and must be replaced.
