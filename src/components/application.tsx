import { useMemo } from 'react';
import { useGetItemsQuery } from '../services/api-service';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  // isFetching is NOT isLoading
  // apparently sockets can also be baked into rtk query
  // currentData vs data
  // https://github.com/reduxjs/redux-toolkit/discussions/2861

  // fetching doesn't rely on useEffect under hood
  // since it lives outside of react
  const { data, currentData, isLoading } = useGetItemsQuery(undefined, {
    // comes with bunch of extra data
    // pollingInterval: 1000,
    // refetchOnFocus,
    // refetchOnReconnect,
    // selectFromResult,
    // skip
  });

  const items = useMemo(() => data?.items || [], [data]);

  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header count={0} />
          <NewItem />
          <section className="flex flex-col gap-8 md:flex-row">
            {/* <ItemList title="Unpacked Items" /> */}
            {/* <ItemList title="Packed Items" /> */}
            <ItemList title="Items" items={items} />
          </section>
          <MarkAllAsUnpacked />
        </>
      )}
    </main>
  );
};

export default Application;
