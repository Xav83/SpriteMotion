'use strict';

describe('first test on travis', function() {
	it('should add 1+1 correctly', function(done) {
		var onePlusOne = 1 + 1;
		onePlusOne.should.equal(2);
		done();
	});
});
