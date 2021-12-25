describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function(){

    })

    it('should calculate tip percent', function(){
        submitServerInfo();
        billAmt = 100;
        tipAmt = 10
        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(10)
      })

      it('should calculate tip percent', function(){
        submitServerInfo();
        billAmt = 100;
        tipAmt = 10
        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(10)
      })
})