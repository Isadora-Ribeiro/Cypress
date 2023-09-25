/// <reference types= "cypress"/>

it('Equaly', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
})

it('Truthy', ()=> {
    const a = true;
    const b = null;
    let c;

    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', ()=>{
    const obj = {
        a: 1,
        b:2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a: 1, b: 2})
    expect(obj).eql({a: 1, b: 2})
})

it('Arrays', ()=>{
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
})

it('Types', ()=>{
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
})