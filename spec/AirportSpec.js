'use strict';


describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear plane for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeoff();
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions', function() {
    it('does not clear planes for takeoff', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('cannot take off during storm');
    });

    it('prevents landing planes', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
  });
});
