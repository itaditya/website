function classNames(obj) {
	let k;
	let cls = '';

  for (k in obj) {
    if (obj[k]) {
      cls && (cls += ' ');
      cls += k;
    }
	}

  return cls;
}

export default classNames;
