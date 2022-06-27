import { connect } from 'react-redux';
import CompareTable from '../components/ecommerce/CompareTable';
import Layout from '../components/layout/Layout';
import { clearCompare, deleteFromCompare } from '../redux/action/compareAction';
import { IConfig } from '../../types';

export interface ICompare {
  clearCompare?: any;
  compare?: any;
  config: IConfig;
  deleteFromCompare?: any;
  newsletterId: string;
  newsletterUser: string;
}

const Compare = ({
  compare,
  clearCompare,
  config,
  deleteFromCompare,
  newsletterUser,
  newsletterId,
}: ICompare) => {
  return (
    <Layout
      parent="Home"
      sub="Shop"
      subChild="Compare"
      {...config}
      newsletterUser={newsletterUser}
      newsletterId={newsletterId}
    >
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                {compare.items.length > 0 ? (
                  <>
                    <CompareTable
                      data={compare.items}
                      features={[
                        'preview',
                        'name',
                        'price',
                        'rating',
                        'description',
                        'color',
                        // "sizes",
                        'stock',
                        'weight',
                        'dimensions',
                        'buy',
                        ' ',
                      ]}
                      deleteFromCompare={deleteFromCompare}
                    />
                    <div className="text-right">
                      <span className="clear-btn" onClick={clearCompare}>
                        Clear All
                      </span>
                    </div>
                  </>
                ) : (
                  <h4>No Products</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  compare: state.compare,
});

const mapDispatchToProps = {
  clearCompare,
  deleteFromCompare,
};

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
