describe("airport", function() {

	describe('Land', function() {
		it('instructs plane to', function() {
			var airport = new Airport();
			var plane = new ();
			airport.land(plane);
			expect(airport.planes()).toContain(plane);
		});
	});
})
