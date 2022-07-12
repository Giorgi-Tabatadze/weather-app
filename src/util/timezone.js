import format from "date-fns/format";
import { formatInTimeZone } from "date-fns-tz";
import addSeconds from "date-fns/addSeconds";
import parseISO from "date-fns/parseISO";

const toLocationTime = (unixTime, timezone, requredformat) => {
  const toUTC = formatInTimeZone(unixTime * 1000, "UTC", "yyyy-MM-dd HH:mm:ss");
  const locationTime = addSeconds(parseISO(toUTC), timezone);
  const formatedLocationTime = format(locationTime, requredformat);

  return formatedLocationTime;
};

export default toLocationTime;
