import { Report } from "./report";

export type ReportGroup<Id extends string> = {
    groupId: Id;
    reports: Report[];
}

export namespace ReportGroup {
    export type Flatten<Id extends string> = {
        groupId: Id;
        reports: Report.Flatten[];
    }

    export function flatten<Id extends string>(reportGroup: ReportGroup<Id>): ReportGroup.Flatten<Id> {
        return {
            groupId: reportGroup.groupId,
            reports: reportGroup.reports.map(report => Report.flatten(report))
        };
    }

    export function concrete<Id extends string>(reportGroup: ReportGroup.Flatten<Id>): ReportGroup<Id> {
        return {
            groupId: reportGroup.groupId,
            reports: reportGroup.reports.map(report => Report.concrete(report))
        };
    }
}

