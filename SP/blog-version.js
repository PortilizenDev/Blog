import {VERSION, DATE, SUFFIX, PREFIX, FALLBACK_VERSION, validVersion, date} from './util/version.js'

var string_ver = ""
string_ver = validVersion()

document.getElementById('version').innerHTML = "Blog Version: " + string_ver
