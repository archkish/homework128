export default function JourneyTile({data, descr}) {
  return (
    <div class="journey-tile">
      <div class="left-bottom"></div>
      <div class="right-top"></div>
      <div class="tile-name">year - {data}</div>
      <div class="tile-descr">{descr}</div>
    </div>
  )
}