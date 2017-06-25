window.theme = window.theme || {};

theme.InstagramFeed = (function() {
    function InstagramFeed(container) {
        var $container = this.$container = $(container);
        var sectionId = $container.attr('data-section-id');
        var $instagramFeed = '#InstagramFeed-' + sectionId;

        this._initFeed($instagramFeed);
    }

    InstagramFeed.prototype = _.assignIn({}, InstagramFeed.prototype, {
        _initFeed: function(el) {
            var $el = $(el);
            var $wrapper = $el.find('.instagram-feed__wrapper');
            var $template = $el.siblings('.instagram-feed__template').html();

            var options = {
                target: $wrapper[0],
                get: 'user',
                userId: $el.data('user'),
                accessToken: $el.data('token'),
                limit: $el.data('limit'),
                resolution: 'standard_resolution',
                template: $template
            }

            if (typeof $el.data('user') !== 'undefined' && typeof $el.data('token') !== 'undefined') {
                var feed = new Instafeed(options);
                feed.run();
            }
        }
    });

    return InstagramFeed;
})();

// Register sections
$(document).ready(function() {
    var sections = new theme.Sections();
    sections.register('instagram-feed', theme.InstagramFeed);
});
