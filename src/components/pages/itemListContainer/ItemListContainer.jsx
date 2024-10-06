import { Card } from "../../common/Card/Card";

export const ItemListContainer = () => {
    return (
        <div>
            <Card title="catan" price={500} stock={5} />
            <Card title="tripulacion" price={400} stock={5} />
        </div>
    );
};
