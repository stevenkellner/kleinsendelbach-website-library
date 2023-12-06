import { Guid, UtcDate } from "../../common";

export type Report = {
    id: Guid;
    title: string;
    message: string;
    imageUrl: string | null;
    createDate: UtcDate;
}

export namespace Report {
    export type Flatten = {
        id: string;
        title: string;
        message: string;
        imageUrl: string | null;
        createDate: string;
    }

    export function flatten(report: Report): Report.Flatten;
    export function flatten(report: Omit<Report, 'id'>): Omit<Report.Flatten, 'id'>;
    export function flatten(report: Report | Omit<Report, 'id'>): Report.Flatten | Omit<Report.Flatten, 'id'> {
        return {
            ...'id' in report ? { id: report.id.guidString } : {},
            createDate: report.createDate.encoded,
            imageUrl: report.imageUrl,
            message: report.message,
            title: report.title
        };
    }

    export function concrete(report: Report.Flatten): Report;
    export function concrete(report: Omit<Report.Flatten, 'id'>): Omit<Report, 'id'>;
    export function concrete(report: Report.Flatten | Omit<Report.Flatten, 'id'>): Report | Omit<Report, 'id'> {
        return {
            ...'id' in report ? { id: new Guid(report.id) } : {},
            createDate: UtcDate.decode(report.createDate),
            imageUrl: report.imageUrl,
            message: report.message,
            title: report.title
        };
    }
}
