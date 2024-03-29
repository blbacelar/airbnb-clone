import getCurrentUser from '../actions/getCurrentUser'
import getListings from '../actions/getListings'
import EmptyState from '../components/EmptyState'
import PropertiesClient from './PropertiesClient'

const TripsPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />
  }

  const listings = await getListings({
    userId: currentUser.id,
  })

  if (listings?.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you haven't listed any property"
      />
    )
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />
}

export default TripsPage
