import React from 'react';

import Subheader from 'material-ui/Subheader';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import styles from '../css/info';

export default () => (
    <Card className={styles.infoarea}>
        <CardTitle title="All about the day!"></CardTitle>
        <CardText>
            <Subheader>Dress code</Subheader>
            <CardText className={styles.infopoints}>
                <div>
                    <span>We're talking</span>
                    <em> Informal Formal </em>
                    <span>, as long as you're smart, you can be as wedding or non wedding as you like!</span>
                </div>
                <div>
                    <span>Suits, dresses, formal jackets, hats, etc, anything formal is good as long as you're there.</span>
                </div>
                <div>
                    <span>For example, the groom won't be wearing a suit, but a lot of other people will!</span>
                </div>
            </CardText>
        </CardText>
        <CardText>
            <Subheader>Gifts</Subheader>
            <CardText className={styles.infopoints}>
                <div>
                    <span>We don't request or expect gifts from you. You </span>
                    <strong>ARE</strong>
                    <span> the gift!</span>
                </div>
                <div>
                    <span>However, if you are swayed by generosity, John Lewis vouchers are very kind.</span>
                </div>
            </CardText>
        </CardText>
    </Card>
);