describe("Utilities test", function() {
    beforeEach(function () {
      billAmtInput.value = 120;
      tipAmtInput.value = 30;
      submitPaymentInfo();
    });
   
  it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmount')).toEqual(30);
  
      billAmtInput.value = 220;
      tipAmtInput.value = 30;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmount')).toEqual(60);
    });
  
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(120);
  
      billAmtInput.value = 240;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(360);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(50);
    });
  
    it('should sum tip percent on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 35)).toEqual(35);
      expect(calculateTipPercent(100, 10)).toEqual(10);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });
  