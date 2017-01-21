
// Place all tests within the $() function since some tests require
// DOM elements. This ensures tests don't run until DOM is ready.
$(function() {

    // ****** RSS FEEDS ********
    describe('RSS Feeds', function() {
         // Make sure allFeeds variable is defined and is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         // Make sure each allFeeds object has a URL defined
         // and the URL is not empty.
         it('should have a URL', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toMatch(/http/i);
            }
         });

         // Make sure each allFeeds object has a name defined
         // and the name property is not empty.
         it('should have a name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                //This checks if there is at least one space present in name.
                expect(allFeeds[i].name).toMatch(' ');
            }
         });
    });

    // ********* MENU**********
    describe('The menu', function() {
        var $body = $("body"),
            $menuIcon = $(".menu-icon-link"),
            $menu = $(".slide-menu");

        // Make sure menu is hidden by default.
        it('should be hidden by default', function() {
            expect($body.hasClass("menu-hidden")).toBe(true);
         });

          // Make sure menu is visible when icon is clicked,
          // and not visible when icon is clicked again.
          it("should toggle visibility when menu icon is clicked", function() {
            $menuIcon.click();
            expect($body.hasClass("menu-hidden")).toBe(false);
            $menuIcon.click();
            expect($body.hasClass("menu-hidden")).toBe(true);
          });
    });

    // ******* INITIAL ENTRIES*************
    describe("Initial Entries", function() {

         // Ensures async function is loaded before test initiates.
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         // Make sure there is at least one .entry element.
         it("should contain at least one entry", function(done) {
            var $lengthOfFeeds = $(".feed .entry").length;
            expect($lengthOfFeeds).toBeGreaterThan(0);
            done();
         });
    });

    // ************* NEW FEED SELECTION **************
    describe("New Feed Selection", function() {

         // Ensure async function loads before test initiates.
         beforeEach(function(done) {
            loadFeed(0, done);
            loadFeed(1, done);
         });

         // Make sure feed content changes when next feed is loaded.
         it("should change content on load of new feed", function(done) {
            var $firstFeed = $("#0"),
                $secondFeed = $("#1");
            expect($firstFeed).not.toEqual($secondFeed);
            done();
         });
    });
}());
