export function TicTacToeBoard({ G, ctx, moves, playerID }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 80px)' }}>
      {G.cells.map((cell, idx) => (
        <div
          key={idx}
          onClick={() => moves.clickCell(idx)}
          style={{
            width: 80,
            height: 80,
            border: '1px solid black',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {cell ?? ''}
        </div>
      ))}
      {ctx.gameover && <p>Game Over!</p>}
    </div>
  );
}