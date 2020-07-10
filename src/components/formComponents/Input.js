import React, { Component } from 'react';
import { path } from 'ramda';
import AutosizeTextarea from 'react-textarea-autosize';
import { prop } from 'ramda';

import withFieldWrapper from '../hocs/withFieldWrapper';
import styles from '../../styles/index.module.css';
import Masked from 'react-text-mask';
import { getMask } from '../../utils/mask';

class Input extends Component {
    static defaultProps = {
        fieldType: 'text'
    };

    onChange = e => this.props.onChange(e.target.value);

    render() {
        const { fieldType, input: { value }, settings } = this.props;
        const mask = prop('mask', settings);
        const inputMask = mask && getMask(mask);

        return path(['textarea'], settings) ? (
            <AutosizeTextarea
                className={styles.formTextarea}
                minRows={3}
                onChange={this.onChange}
                value={value}
            />
        ) : inputMask ? (
            <Masked
                className={styles.formInput}
                value={value}
                type={fieldType}
                onChange={this.onChange}
                mask={inputMask}
                placeholderChar={'\u2000'}
                keepCharPositions={false}
                guide
            />
        ) : (
            <input
                className={styles.formInput}
                value={value}
                type={fieldType}
                onChange={this.onChange}
            />
        );
    }
}

export default withFieldWrapper(Input);
