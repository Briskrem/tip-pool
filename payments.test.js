describe('should calculate payments', function(){
    it('should have input', function(){
        billAmtInput.value = 100;
        submitServerInfo();
        expect(payment.billAmt).toEqual(100)// it says payment not defined
    })
})