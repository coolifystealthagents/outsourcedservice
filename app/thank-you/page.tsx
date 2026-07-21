import { Header, Footer } from '../components';

export default function Thanks() {
  return <>
    <Header />
    <main className="section confirmation-page">
      <div className="container narrow-card">
        <p className="eyebrow">Request received</p>
        <h1>Your service brief is in.</h1>
        <p className="lead">A Philippines staffing partner may follow up to clarify the tasks, schedule, tools, and review rules. The request stays limited to Filipino talent.</p>
        <a className="btn primary" href="/">Back to the service desk</a>
      </div>
    </main>
    <Footer />
  </>;
}
