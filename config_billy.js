/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		/*	
		{
			module: "alert",
		},

		{
			module: "updatenotification",
			position: "top_bar"
		},

		*/		

//------------- CLOCK ------------------------------------
		{
			module: "clock",
			position: "top_left"
		},


//------------- CALENDAR ------------------------------------
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "flag-usa",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
						maximumEntries: "8",
						maximumNumberOfDays: "7"
					},
					{
						symbol: "truck",
						url: "https://calendar.google.com/calendar/ical/<EXAMPLE>/basic.ics",
						maximumEntries: "10",
						maximumNumberOfDays: "7"	
					},
					{
						symbol: "calendar",
						url: "https://calendar.google.com/calendar/ical/<EXAMPLE>/basic.ics",
						maximumEntries: "10",
						maximumNumberOfDays: "7"	
					}
				],
				fade: false,
				limitDays: "7"
			}
		},

//---------------- NEWSFEED ------------------------------------

		{
			module: "newsfeed",
			position: "bottom_bar",
			replaceMe: [ "&apos;", "'"],
			config: {
				feeds: [
					{
						title: "CNBC",
						url: "https://www.cnbc.com/id/10001054/device/rss/rss.html"
					},
					{
						title: "FOX News",
						url: "http://feeds.foxnews.com/foxnews/latest"
					},
					{
						title: "Houston Chronicle",
						url: "https://www.chron.com/rss/feed/Houston-and-Texas-272.php"
					},
				],
				updateInterval: "30000",
				ignoreOldItems: true,
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

//------------------------MMM-octomirror----------------------------------------
	/*
	{
				module: "octomirror-module",
				position: "top_right",
				config: {
					url: "http://octopi.local",
					api_key: "949B4C9976F141E0A1DB9150BE3540CE",
					showStream: false,
					interactive: false
				}

	},*/

//------------------------MMM-WatchDog----------------------------------------
		{
			module: 'MMM-WatchDog',
			config: {
				interval: 5,
				timeout: 15,
				// See 'Configuration options' for more information.
			}
		},

//------------------------MMM-Wallpaper----------------------------------------
	{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: {
				source: ["local:/home/pi/Pictures"],
				crossfade: false,
				//filter: "grayscale(0.5) brightness(0.4)",
				filter: "grayscale(0.25) brightness(0.5)",
				size: "cover",
				caption: false,
				slideInterval: 3 * 60 * 1000
				//orientation: "vertical",
				//maximumEntries: 10,
			}
	}


	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
