
it('should calculate the monthly rate correctly', function () {
    const values = {
        loanAmount: 8000, totalYears: 5, inRate: 2.0
      }; 
      expect(monthlyPayment(values)).toEqual('140.22');
    });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
        loanAmount: 8000, totalYears: 8, inRate: 5.708
      };
      expect(monthlyPayment(values)).toEqual('104.00');
  });
  
