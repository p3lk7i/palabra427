function parsePlb(text) {
  const roots = [];
  const stack = [roots];
  
  for (let raw of text.split('\n')) {
    let line = raw.trim();
    if (!line || line.startsWith('//')) continue;
    if (!line.startsWith('[')) throw new Error('Line must start with [');
    
    const end = line.indexOf(']');
    const header = line.slice(1, end);
    const value = line.slice(end+1).trim() || null;
    
    const [levelStr, key = ''] = header.split(':');
    const level = parseInt(levelStr);
    
    const node = { _key: key, _value: value, _children: [] };
    
    while (stack.length > level) stack.pop();
    if (stack.length < level) throw new Error('Level jump');
    
    stack.at(-1).push(node);
    stack.push(node._children);
  }
  return roots;
}

// demo:
  console.log(JSON.stringify(parsePlb(`your text here`), null, 2));
