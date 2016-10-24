describe("airport", function() {

	describe('Land', function() {
		it('instructs plane to', function() {
			var airport = new Airport();
			expect(airport.land()).toEqual("Plane landed")
		});
	});


})
