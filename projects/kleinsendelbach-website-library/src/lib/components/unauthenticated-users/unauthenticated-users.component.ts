import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverviewListData, TrackBy, User } from '../../types';
import { CommonModule } from '@angular/common';
import { DeviceTypeService } from '../../services';
import { OverviewListComponent } from '../overview-list/overview-list.component';

@Component({
    selector: 'unauthenticated-users',
    standalone: true,
    imports: [CommonModule, OverviewListComponent],
    templateUrl: './unauthenticated-users.component.html',
    styleUrl: './unauthenticated-users.component.sass'
})
export class UnauthenticatedUsersComponent<Role extends string, InternalKeyPath extends string> {

    @Input({ required: true }) public unauthenticatedUsers!: User<Role>[];

    @Output() public handleAccessRequest = new EventEmitter<{ type: 'accept' | 'decline', user: User<Role> }>();

    public TrackBy = TrackBy;

    constructor(
        public readonly deviceType: DeviceTypeService
    ) {}

    public get overviewListData(): OverviewListData<InternalKeyPath> {
        return this.unauthenticatedUsers.map(user => ({
            title: `${user.firstName} ${user.lastName}`,
            subtitle: null,
            buttons: [
                {
                    title: 'Bestätigen',
                    action: () => this.handleAccessRequest.emit({ type: 'accept', user: user }),
                    link: null,
                    options: 'prominent'
                },
                {
                    title: 'Ablehnen',
                    action: () => this.handleAccessRequest.emit({ type: 'decline', user: user }),
                    link: null,
                    options: 'prominent'
                }
            ]
        }));
    }
}
