/*!
   * YouTube Thumbnail Downloader
   * Copyright(c) 2021 İlter Alkan
   * Copyright(c) 2021 CloddleInc.
*/

'use strict';

// Module Dependencies

const chalk = require('chalk');

module.exports = function(video_url) {

    // Define YouTube CDN Urls.
    let defaultUrl1 = `https://i.ytimg.com/vi/`
    let defaultUrl2 = `/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAQw1wMf1ew_Wr1a6cAYskANm8h_g`

    if (video_url == undefined || video_url == null || video_url == '') {
        console.log(chalk.red('Error! ') + ' Invalid video URL');
        return false
    } else {
        if (video_url.indexOf('www') == -1) {
            var urlToken = video_url.slice(28)
            return defaultUrl1 + urlToken + defaultUrl2
        } else {
            var urlToken = video_url.slice(32)
            return defaultUrl1 + urlToken + defaultUrl2
        }
    }
}