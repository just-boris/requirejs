describe("reqiure", function() {
    beforeEach(function () {
        modules = {};
    });
    afterEach(function () {
        expect(Object.keys(pendingModules).length).toBe(0);
    });
    it("should require modules", function(done) {
        require(['base/test/fixtures/A', 'base/test/fixtures/B'], function(A, B) {
            expect(A).toBe("module A");
            expect(B).toBe("module B");
            done();
        });
    });

    it("should load modules with dependencies", function (done) {
        require(['base/test/fixtures/C'], function(C) {
            expect(C).toBe("module C with module A");
            done();
        });
    });

    it("should can predefine modules", function (done) {
        define('C', function() {
            return 'module C';
        });
        require(['C'], function(C) {
            expect(C).toBe('module C');
            done();
        });
    });
});
