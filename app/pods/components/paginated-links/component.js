import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['paginated-links'],

  showFirst: computed('pageNumber.{first,number}', {
    get() {
      return isPresent(this.get('pageNumber.first')) && this.get('pageNumber.number') > this.get('pageNumber.first');
    }
  }),

  showPrev: computed('page_number.prev', {
    get() {
      return isPresent(this.get('page_number.prev'));
    }
  }),

  showNext: computed('pageMeta.next', {
    get() {
      // console.log(this.get('pageMeta.next'));
      return isPresent(this.get('pageMeta.next'));
    }
  }),

  showLast: computed('pageMeta.{last,number}', {
    get() {
      return isPresent(this.get('pageMeta.last')) && this.get('pageMeta.number') < this.get('pageMeta.last');
    }
  }),

  showInfo: computed('pageMeta.total', {
    get() {
      return this.get('pageMeta.total') > 1;
    }
  })
});
