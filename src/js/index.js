import { conferenceFilter } from './components/conferenceFilter';

const loadConferenceFilters = async () => {
  if (document.querySelector('.conf-filter')) {
    document.querySelectorAll('.conf-filter').forEach((confFilter) => {
      conferenceFilter(confFilter);
    })
  };
};

loadConferenceFilters();