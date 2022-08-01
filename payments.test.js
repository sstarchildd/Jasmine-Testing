describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 120;
      tipAmtInput.value = 30;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('120');
      expect(allPayments['payment1'].tipAmt).toEqual('30');
      expect(allPayments['payment1'].tipPercent).toEqual(25);
    });
  
    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should payment update #paymentTable on appendPaymentTable()', function () {
      let cPayment = createCurPayment();
      allPayments['payment1'] = cPayment;
  
      appendPaymentTable(cPayment);
  
      let tdList = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(tdList.length).toEqual(4);
      expect(tdList[0].innerText).toEqual('$120');
      expect(tdList[1].innerText).toEqual('$30');
      expect(tdList[2].innerText).toEqual('%25');
      expect(tdList[3].innerText).toEqual('X');
    });
  
    it('should create a new payment on createCurPayment()', function () {
      let expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    it('should not create payment with empty input on createCurPayment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let curPayment = createCurPayment();
  
      expect(curPayment).toEqual(undefined);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });
  
  