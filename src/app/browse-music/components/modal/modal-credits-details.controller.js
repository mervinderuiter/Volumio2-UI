class ModalCreditsDetailsController {
    constructor($uibModalInstance, dataObj) {
      'ngInject';
      this.$uibModalInstance = $uibModalInstance;
      this.dataObj = dataObj;
    }

    cancel() {
      this.$uibModalInstance.dismiss('cancel');
    }

    showCreditLink(uri, title) {
    }
  }

  export default ModalCreditsDetailsController;
