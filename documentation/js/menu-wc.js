'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">thethingsstack documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/APICall.html" data-type="entity-link" >APICall</a>
                            </li>
                            <li class="link">
                                <a href="classes/APICall-1.html" data-type="entity-link" >APICall</a>
                            </li>
                            <li class="link">
                                <a href="classes/APICall-2.html" data-type="entity-link" >APICall</a>
                            </li>
                            <li class="link">
                                <a href="classes/Application.html" data-type="entity-link" >Application</a>
                            </li>
                            <li class="link">
                                <a href="classes/Organization.html" data-type="entity-link" >Organization</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiConnectionOptions.html" data-type="entity-link" >ApiConnectionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKey.html" data-type="entity-link" >CreateAPIKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKey-1.html" data-type="entity-link" >CreateAPIKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKey-2.html" data-type="entity-link" >CreateAPIKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKeyPayload.html" data-type="entity-link" >CreateAPIKeyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKeyPayload-1.html" data-type="entity-link" >CreateAPIKeyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKeyPayload-2.html" data-type="entity-link" >CreateAPIKeyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKeyUserPayload.html" data-type="entity-link" >CreateAPIKeyUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKeyUserPayload-1.html" data-type="entity-link" >CreateAPIKeyUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAPIKeyUserPayload-2.html" data-type="entity-link" >CreateAPIKeyUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateApplication.html" data-type="entity-link" >CreateApplication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateApplication-1.html" data-type="entity-link" >CreateApplication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateApplicationPayload.html" data-type="entity-link" >CreateApplicationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateApplicationPayload-1.html" data-type="entity-link" >CreateApplicationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateApplicationUserPayload.html" data-type="entity-link" >CreateApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateApplicationUserPayload-1.html" data-type="entity-link" >CreateApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteApplicationUserPayload.html" data-type="entity-link" >DeleteApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfo.html" data-type="entity-link" >GetAPIKeyInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfo-1.html" data-type="entity-link" >GetAPIKeyInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfo-2.html" data-type="entity-link" >GetAPIKeyInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfoPayload.html" data-type="entity-link" >GetAPIKeyInfoPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfoPayload-1.html" data-type="entity-link" >GetAPIKeyInfoPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfoPayload-2.html" data-type="entity-link" >GetAPIKeyInfoPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfoUserPayload.html" data-type="entity-link" >GetAPIKeyInfoUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfoUserPayload-1.html" data-type="entity-link" >GetAPIKeyInfoUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyInfoUserPayload-2.html" data-type="entity-link" >GetAPIKeyInfoUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyList.html" data-type="entity-link" >GetAPIKeyList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyList-1.html" data-type="entity-link" >GetAPIKeyList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyList-2.html" data-type="entity-link" >GetAPIKeyList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyListPayload.html" data-type="entity-link" >GetAPIKeyListPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyListPayload-1.html" data-type="entity-link" >GetAPIKeyListPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyListPayload-2.html" data-type="entity-link" >GetAPIKeyListPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyListUserPayload.html" data-type="entity-link" >GetAPIKeyListUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyListUserPayload-1.html" data-type="entity-link" >GetAPIKeyListUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetAPIKeyListUserPayload-2.html" data-type="entity-link" >GetAPIKeyListUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplication.html" data-type="entity-link" >GetApplication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationList.html" data-type="entity-link" >GetApplicationList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/getApplicationList.html" data-type="entity-link" >getApplicationList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/getApplicationList-1.html" data-type="entity-link" >getApplicationList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/getApplicationListPayload.html" data-type="entity-link" >getApplicationListPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/getApplicationListPayload-1.html" data-type="entity-link" >getApplicationListPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationPayload.html" data-type="entity-link" >GetApplicationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationRight.html" data-type="entity-link" >GetApplicationRight</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationRightUserPayload.html" data-type="entity-link" >GetApplicationRightUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationUserPayload.html" data-type="entity-link" >GetApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/getApplicationUserPayload.html" data-type="entity-link" >getApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/getApplicationUserPayload-1.html" data-type="entity-link" >getApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollaboratorInfo.html" data-type="entity-link" >GetCollaboratorInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollaboratorInfo-1.html" data-type="entity-link" >GetCollaboratorInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollaboratorInfoPayload.html" data-type="entity-link" >GetCollaboratorInfoPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollaboratorInfoPayload-1.html" data-type="entity-link" >GetCollaboratorInfoPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollaboratorInfoUserPayload.html" data-type="entity-link" >GetCollaboratorInfoUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollaboratorInfoUserPayload-1.html" data-type="entity-link" >GetCollaboratorInfoUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollabortorList.html" data-type="entity-link" >GetCollabortorList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollabortorListPayload.html" data-type="entity-link" >GetCollabortorListPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetCollabortorListUserPayload.html" data-type="entity-link" >GetCollabortorListUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PurgeApplicationUserPayload.html" data-type="entity-link" >PurgeApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RestoreApplicationUserPayload.html" data-type="entity-link" >RestoreApplicationUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchApplication.html" data-type="entity-link" >SearchApplication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetCollaboratorPayload.html" data-type="entity-link" >SetCollaboratorPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetCollaboratorPayload-1.html" data-type="entity-link" >SetCollaboratorPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetCollaboratorUserPayload.html" data-type="entity-link" >SetCollaboratorUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetCollaboratorUserPayload-1.html" data-type="entity-link" >SetCollaboratorUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKey.html" data-type="entity-link" >UpdateAPIKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKey-1.html" data-type="entity-link" >UpdateAPIKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKey-2.html" data-type="entity-link" >UpdateAPIKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKeyPayload.html" data-type="entity-link" >UpdateAPIKeyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKeyPayload-1.html" data-type="entity-link" >UpdateAPIKeyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKeyPayload-2.html" data-type="entity-link" >UpdateAPIKeyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKeyUserPayload.html" data-type="entity-link" >UpdateAPIKeyUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKeyUserPayload-1.html" data-type="entity-link" >UpdateAPIKeyUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAPIKeyUserPayload-2.html" data-type="entity-link" >UpdateAPIKeyUserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateApplication.html" data-type="entity-link" >UpdateApplication</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateApplicationPayload.html" data-type="entity-link" >UpdateApplicationPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateApplicationUserPayload.html" data-type="entity-link" >UpdateApplicationUserPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});