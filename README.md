# weather.css
A highly customizable library for setting a page's CSS properties/appearance based on the user's local weather conditions.

If you've modified my "default" styles (see ``weathercssOptions.js``), I'd love to see what you came up with!  Please post any examples in the "show and tell" category on the repo's [discussion board](https://github.com/dei-layborer/weather.css/discussions).

## Installation

Add ``weathercssOptions.js`` and ``weathercss.js`` to the bottom of your page's HTML as follows:

```html

[page content]

<script src="weathercssOptions.js"></script>
<script src="weathercss.js"></script>
</body>
```

I'm not aware of any problems that may be caused by using this library in a more complicated app, i.e. something that's based on Node or another framework.  Please open an issue if there're any conflicts.

I don't use NodeJS or anything like that, but if by some twist there's enough demand, I should be able to create a package out of this.  Or you're welcome to do so yourself, provided that everything complies with the license under which this library is released (GPL v3).

## Privacy

The user's weather information is retrieved from the wonderful [https://wttr.in/](wttr.in).

I cannot give legal advice, especially given the massive number of jurisdictions where this may (hopefully!) be used.  So it's up to you as the website owner to be aware of what data is transmitted, what the applicable privacy policies are, etc.

This library sends a query from the user's browser to wttr.in in order to retrieve their local weather, unless the corresponding option is set to ``false``.  In that case, a ``serverLocation`` must be specified in ``weathercssOptions.js`` or nothing will happen.  See the explanation in the **Options** section below for how to set this and what it may be set to.

If the user's browser makes the query (which is the default), wttr.in will obtain their location based on their IP address.  This could be of varying levels of accuracy, especially depending on the user's internet setup, whether they're using a VPN, etc.  None of this data is sent to the host of the web page, as it all happens on the client side, but I cannot guarantee that there's no way to intercept this or anything.  

## Options

I've tried to make things as customizeable as possible.  In addition, a goal was making this as user-friendly as possible, even to those who may not know a lot of CSS or JavaScript.  Thus there are some instances where the script will do things for you **or** you may do them manually (such as adding the settings/preferences icon).

### Appearance

All elements that are created by weather.css are stylable.  There is a built-in style, which is set via JavaScript.  You can tweak those options as desired (provided they result in valid CSS, of course), or you can create external CSS rules.  Everything created by weather.css has a unique ID, so this should make styling yourself painless.  See below for a list of the created elements:

| ID                     | Description  | 
|------------------------|--------------|
| ``weather-prefs-icon``  | Element containing the small "wrench" icon that, when clicked, opens up the user's preferences |
| ``weather-prefs-modal`` | A <div> element that contains the preferences/options that may be set by the user |

