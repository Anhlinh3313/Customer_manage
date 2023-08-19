import moment from "moment";

export const stringSplit = (string, index) => {
  if (string && index) {
    return string.split(",")[index];
  } else {
    return "";
  }
};

export const groupData = (array, groupField, sortField) => {
  var groups = {}; // This object will end being keyed by groups, and elements will be arrays of the rows within the given array, which have been sorted by the sortField
  // Put all the rows into groups
  for (var i = 0; i < array?.length; i++) {
    var row = array[i];
    var groupValue = row[groupField];
    groups[groupValue] = groups[groupValue] || [];
    groups[groupValue].push(row);
  }
  //Sort each group
  for (var groupValue in groups) {
    groups[groupValue] = groups[groupValue].sort(function (a, b) {
      return a[sortField] - b[sortField];
    });
  }
  const final = [];

  for (const key in groups) {
    final.push({
      round: key,
      children: groups[key]
    })
  }
  // Return the results
  return final.reverse();
};

export const groupDataNotReverse = (array, groupField, sortField) => {
  var groups = {}; // This object will end being keyed by groups, and elements will be arrays of the rows within the given array, which have been sorted by the sortField
  // Put all the rows into groups
  for (var i = 0; i < array?.length; i++) {
    var row = array[i];
    var groupValue = row[groupField];
    groups[groupValue] = groups[groupValue] || [];
    groups[groupValue].push(row);
  }
  //Sort each group
  for (var groupValue in groups) {
    groups[groupValue] = groups[groupValue].sort(function (a, b) {
      return a[sortField] - b[sortField];
    });
  }
  const final = [];

  for (const key in groups) {
    final.push({
      round: key,
      children: groups[key]
    })
  }
  return final;
};

export const ConvertMoney = (value)=>{
  value = value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  return value
}

export const ConvertDateTime = (value)=>{
  value = moment(new Date(value)).format("HH:mm DD/MM/YYYY");
  return value
}