const e={"nav.run":"Run","nav.run_tt":"execute this query on Overpass API","nav.rerender_tt":"parse the MapCSS and rerender the map","nav.share":"Share","nav.share_tt":"get a permalink for this query","nav.export":"Export","nav.export_tt":"various export tools","nav.save":"Save","nav.save_tt":"save this query","nav.load":"Load","nav.load_tt":"load saved query or example","nav.wizard":"Wizard","nav.wizard_tt":"a query builder","nav.settings":"Settings","nav.settings_tt":"various settings","nav.help":"Help","nav.help_tt":"help, about and attributions","nav.logout":"Logout","nav.logout_tt":"logout from currently synced osm account","tabs.map":"Map","tabs.map_tt":"map view","tabs.data":"Data","tabs.data_tt":"data view","map_controlls.zoom_to_data":"zoom to data","map_controlls.localize_user":"locate me!","map_controlls.localize_user_disabled":"disabled because overpass turbo has not been loaded via https://","map_controlls.select_bbox":"manually select bbox","map_controlls.select_bbox_disabled":"disabled as the current query doesn't require a bbox","map_controlls.toggle_wide_map":"toggle wide map","map_controlls.toggle_data":"toggle data overlay","map_controlls.suggest_zoom_to_data":"click here to show the data","settings.title":"Settings","settings.section.general":"General Settings","settings.ui_lang":"UI Language","settings.server":"Server","settings.disable_autorepair":"Disable warning/autorepair message when Overpass API returns no visible data.","settings.section.editor":"Editor","settings.enable_rich_editor":"Enable rich code editor","settings.enable_rich_editor_expl":"disable this on mobile devices; requires a page-reload to take effect","settings.editor_width":"Width of editor","settings.editor_width_expl":'e.g. "400px", leave blank for defaults',"settings.section.map":"Map","settings.tile_server":"Tile-Server","settings.tile_opacity":"Tiles Opacity","settings.tile_opacity_expl":"transparency of background tiles: 0=transparent … 1=visible","settings.show_crosshairs":"Show crosshairs at the map center.","settings.disable_poiomatic":"Don't display small features as POIs.","settings.show_data_stats":"Show some stats about loaded and displayed data.","settings.section.sharing":"Sharing","settings.include_map_state":"Include current map state in shared links","settings.compression":"Compression","settings.section.export":"Export","settings.export_image_scale":"Show scale on exported images.","settings.export_image_attr":"Show attribution on exported images.","save.title":"Save","save.enter_name":"Enter a name for this query","load.title":"Load","load.delete_query":"delete this query","load.saved_queries-local":"Saved Queries (local)","load.saved_queries-osm":"Saved Queries (osm.org)","load.saved_queries-osm-loading":"Loading saved queries from osm.org...","load.saved_queries-osm-error":"An error occurred while loading saved queries from osm.org :(","load.examples":"Examples","load.no_saved_query":"no saved query yet","export.title":"Export","export.download-error":"Export - Error","export.copy_to_clipboard":"Copy this text to clipboard","export.copy_to_clipboard_success":"Export - Successfully copied to clipboard","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> was successfully copied to the clipboard.',"export.section.map":"Map","export.as_png":'as <a id="export-image" href="">png image</a>',"export.as_interactive_map":'as <a id="export-interactive-map" href="">interactive Map</a>',"export.current_map_view":'current <a id="export-map-state" href="">map view</a>',"export.map_view_expl":"bbox, center, etc.","export.section.data":"Data","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">download</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">copy</a></span></div>',"export.raw_data":"raw OSM data","export.raw_interpreter":'raw data directly from <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'save GeoJSON to <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Query","export.format_text":`<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn't include additional overpass turbo features such as MapCSS.">standalone query</abbr>`,"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">raw query</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">osm wiki</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr> remote data url',"export.to_xml":'convert to <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'convert to (<a id="export-convert-compact" href="" target="_blank" class="external">compact</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"load data into an OSM editor:","export.geoJSON.title":"Export - GeoJSON","export.geoJSON.expl":"The currently shown data as GeoJSON:","export.geoJSON.no_data":"No GeoJSON data available! Please run a query first.","export.geoJSON_gist.title":"Saved as gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Edit with geojson.io:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Export - GPX","export.GPX.expl":"The currently shown data as GPX:","export.GPX.no_data":"No GPX data available! Please run a query first.","export.KML.title":"Export - KML","export.KML.expl":"The currently shown data as KML:","export.KML.no_data":"No KML data available! Please run a query first.","export.raw.title":"Export - raw","export.raw.no_data":"No raw data available! Please run a query first.","export.map_view.title":"Current Map View","export.map_view.permalink":"Permalink","export.map_view.permalink_osm":"to osm.org","export.map_view.center":"Center","export.map_view.center_expl":"lat, lon","export.map_view.bounds":"Bounds","export.map_view.bounds_selection":"Bounds (manually selected bbox)","export.map_view.bounds_expl":"south, west, north, east","export.map_view.zoom":"Zoom","export.image.title":"Export - Image","export.image.alt":"the exported map","export.image.download":"Download","export.image.attribution_missing":"Make sure to include proper attributions when distributing this image!","share.title":"Share","share.header":"Permalink","share.copy_this_link":'Copy this <a href="" id="share_link_a">link</a> to share the current code:',"share.options":"Options","share.incl_map_state":"include current map state","share.run_immediately":"run this query immediately after loading","help.title":"Help","help.section.introduction":"Introduction","help.intro.0":'This is <i>OSM Download</i>, a web-based data filtering tool for <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'With OSM Download you can run <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> queries and analyse the resulting OSM data interactively on a map.',"help.intro.1b":'There is an integrated <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">Wizard</a> which makes creating queries super easy.',"help.intro.2":'More information about <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> and how to write <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">Overpass queries</a> can be found in the OSM wiki.',"help.section.queries":"Overpass Queries","help.queries.expl":'Overpass API allows to query for OSM data by your own search criteria. For this purpose, it has a specifically crafted <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">query language</a>.',"help.intro.shortcuts":"In addition to regular Overpass API queries one can use the following handy shortcuts in overpass turbo:","help.intro.shortcuts.bbox":"bounding box coordinates of the current map view","help.intro.shortcuts.center":"map center coordinates","help.intro.shortcuts.date":"ISO 8601 date-time-string a certain time interval ago (e.g. “24 hours”)","help.intro.shortcuts.style":'defines a <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">MapCSS stylesheet</a>',"help.intro.shortcuts.custom":"Arbitrary shortcuts can be defined by putting <i>{{shortcut=value}}</i> somewhere in the script.","help.intro.shortcuts.more":'More overpass-turbo shortcuts, additional information about the above and usage examples can be found in the <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM wiki</a>.',"help.section.ide":"IDE","help.ide.share.title":"Sharing","help.ide.share.expl":"It is possible to send a permalink with the query you are currently working on to someone else. This is found in the <i>Share</i> tool and shows you a link which you can send to a friend or post online. (Note that others will work on their own copy of the query.)","help.ide.save_load.title":"Save and Load","help.ide.save_load.expl":"You can also save and load your queries. For a start, there are a few example queries preloaded. Take a look at them for a short glimpse of what overpass can do.","help.ide.keyboard.title":"Keyboard shortcuts:","help.ide.keyboard.run":"Run the current query.","help.ide.keyboard.wizard":"Start the query wizard.","help.ide.keyboard.load_save":"Load (open) / Save a query.","help.ide.keyboard.help":"Open this help dialog.","help.section.key":"Map Key","help.key.example":"various map features","help.key.description":"Ways are shown as bold blue lines, Polygons as yellow areas with a thin blue outline, POIs (nodes with tags) as yellow circles with a thin blue outline. Circles with a red filling stand for polygons or ways that are too small to be displayed normally. Pink lines or outlines mean, that an object is part of at least one (loaded) relation. Dashed lines mean that a way or polygon has incomplete geometry (most likely because some of its nodes have not been loaded).","help.section.export":"Export","help.export":'The <i>Export</i> tool holds a variety of options to do with the query and/or data loaded by the query.<br />Options with this symbol:<span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> rely on or refer to external (online) tools.',"help.export.query_data.title":"Query / Data","help.export.query_data.expl":"This holds some things you can do with the raw query or data, like converting the query between the various query languages or exporting the data as geoJSON. A very useful option is the possibility to send the query to JOSM.","help.export.map.title":"Map","help.export.map.expl":"Convert the current map-with-data view to a static png image, or a (fullscreen) interactive map, etc.","help.section.about":"About","help.about.maintained":"<i>OSM Downloader</i> is maintained by <a href='https://arahmandc.github.io/' >Atikur Rahman</a> (arahman.dcc2 at gmail.com). from <a href='mapbd.github.io/web'>MapBD</a>","help.section.attribution":"Attribution","help.attr.data_sources":"Data Sources","help.attr.data":'Data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Terms</a>)</span>',"help.attr.mining":"Data mining by","help.attr.tiles":'Map tiles &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',"help.attr.search":"Search provided by","help.attr.software":"Software & Libraries","help.attr.leaflet":"Map powered by","help.attr.codemirror":"Editor powered by","help.attr.other_libs":"Other libraries:","ffs.title":"Query Wizard","ffs.comments":"add query comments","ffs.placeholder":"search","ffs.expl":'The <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">wizard</a> assists you with creating Overpass queries. Here are some usage examples:',"ffs.parse_error":"Sorry, this search cannot be understood.","ffs.parse_error_expl":'Note that you must use quotation marks with strings containing spaces or special characters and that multiple search filters must be separated by appropriate boolean operators (<i>and</i> or <i>or</i>). Read the <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">documentation</a> for more information.',"ffs.typo":"Did you mean:","dialog.dismiss":"dismiss","dialog.cancel":"cancel","dialog.save":"save","dialog.save-local":"save (local)","dialog.save-osm":"save on osm.org","dialog.delete":"delete","dialog.close":"close","dialog.done":"done","dialog.abort":"abort","dialog.reset":"reset","dialog.repair_query":"repair query","dialog.continue_anyway":"continue anyway","dialog.show_data":"show data","dialog.wizard_build":"build query","dialog.wizard_run":"build and run query","dialog.delete_query.title":"Delete Query?","dialog.delete_query.expl":"Do you really want to delete the following query","dialog.delete_query.expl-osm":"Do you really want to delete the following synchronized query","error.query.title":"Query Error","error.query.expl":"An error occurred during the execution of the overpass query! This is what overpass API returned:","error.ajax.title":"Ajax Error","error.ajax.expl":"An error occurred during the execution of the overpass query!","error.mapcss.title":"MapCSS Error","error.mapcss.expl":"Invalid MapCSS stylesheet:","error.remote.title":"Remote Control Error","error.remote.incompat":"Error: incompatible JOSM remote control version","error.remote.not_found":"Remote control not found. :( Make sure JOSM is already running and properly configured.","error.nominatim.title":"Nominatim Error","error.nominatim.expl":"Could not find anything with the following name:","warning.browser.title":"Your browser is not supported :(","warning.browser.expl.1":'The browser you are currently using, is (most likely) not capable of running (significant parts of) this Application. <small>It must support <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> and <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":'Note that you may have to enable cookies and/or "local Data" for this site on some browsers (such as Firefox and Chrome).',"warning.browser.expl.3":'Please upgrade to a more up-to-date version of your browser or switch to a more capable one! Recent versions of <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a> have been tested to work. Alternatively, you can still use the <a href="http://overpass-api.de/query_form.html">Overpass_API query form</a>.',"warning.incomplete.title":"Incomplete Data","warning.incomplete.expl.1":"This query returned no nodes. In OSM, only nodes contain coordinates. For example, a way cannot be displayed without its nodes.","warning.incomplete.expl.2":'If this is not what you meant to get, <i>overpass turbo</i> can help you to repair (auto-complete) the query by choosing "repair query" below. Otherwise you can continue to the data.',"warning.incomplete.not_again":"do not show this message again.","warning.incomplete.remote.expl.1":"It looks like if this query will not return OSM data in XML format with metadata. Editors like JOSM require the data to be in that format, though.","warning.incomplete.remote.expl.2":'<i>overpass turbo</i> can help you to correct the query by choosing "repair query" below.',"warning.share.long":"Warning: This share-link is quite long. It may not work under certain circumstances","warning.share.very_long":"Warning: This share-link is very long. It is likely to fail under normal circumstances (browsers, webservers). Use with caution!","warning.huge_data.title":"Large amounts of data","warning.huge_data.expl.1":"This query returned quite a lot of data (approx. {{amount_txt}}).","warning.huge_data.expl.2":"Your browser may have a hard time trying to render this. Do you really want to continue?","waiter.processing_query":"processing query...","waiter.export_as_image":"exporting as image...","data_stats.loaded":"Loaded","data_stats.displayed":"Displayed","data_stats.nodes":"nodes","data_stats.ways":"ways","data_stats.relations":"relations","data_stats.areas":"areas","data_stats.pois":"pois","data_stats.lines":"lines","data_stats.polygons":"polygons","data_stats.request_duration":"Overpass request took","data_stats.lag":"Currentness of data","data_stats.lag_areas":"Currentness of areas","data_stats.lag.expl":"behind main OSM db","popup.tags":"Tags","popup.metadata":"Metadata","popup.coordinates":"Coordinates","popup.node":"Node","popup.nodes":"Nodes","popup.way":"Way","popup.ways":"Ways","popup.relation":"Relation","popup.relations":"Relations","popup.incomplete_geometry":"Attention: incomplete geometry (e.g. some nodes missing)","map.intentionally_blank":"This map intentionally left blank."};export{e as default};
