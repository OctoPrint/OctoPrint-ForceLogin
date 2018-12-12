----

**NOTE**: A different version of this plugin comes now bundled with OctoPrint 1.3.10+. This repository should be considered **obsolete** and is only kept for historical purposes.

----

# OctoPrint-ForceLogin

Forces users to login to access the regular web interface. 

**IMPORTANT:**

This **only** prevents accessing the regular web page, it does **not** deny access on the API endpoints used by said web page to retrieve information from the backend. It also doesn't deny access to the webcam stream in any way if the URL is known (the webcam stream is not controlled by OctoPrint but only embedded and it **cannot** control access to it for that reason).

This is **not** an alternative to setting up access control in front of your OctoPrint instance. It's more like security by "obscurity" and actually only provided here as an example on how [UiPlugins](http://docs.octoprint.org/en/master/plugins/mixins.html#uiplugin) can be used and how a forced login might work once there's a [more granular permission system](https://github.com/foosel/OctoPrint/issues/1110#issuecomment-283984462) implemented in OctoPrint.

If you need to secure your OctoPrint further than what the built-in access control with its current permissions allows you, use other means like HTTP Basic Auth enforced through your reverse proxy (an example on how to do this on OctoPi can be found [in this episode of OctoPrint On Air](https://www.youtube.com/watch?v=dF5ndNxDH-M&t=1738s)).

## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/OctoPrint/OctoPrint-ForceLogin/archive/master.zip

