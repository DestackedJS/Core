import DestackedPay from '@destacked/pay/provider';

const withDestackedPay = (Component) => (props) =>
    props.pay ? (
        <DestackedPay args={props.pay}>
            <Component {...props} />
        </DestackedPay>
    ) : (
        <Component {...props} />
    );

export default withDestackedPay;
