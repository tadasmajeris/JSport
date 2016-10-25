'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off from airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(); }).toThrowError('cannot take off during storm');
    expect(airport.planes()).toContain(plane);
  });

  it('prevents landing when weather is stormy', function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
    expect(airport.planes()).not.toContain(plane);
  });
});
