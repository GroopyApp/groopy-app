import moment from "moment";

export const parseShortDateTime = (dateStr: string): string => {
    return moment(dateStr).format("MMM DD, HH:mm");

}